import re
import os
import shutil
import yaml

from marko import Markdown

OBSIDIAN_VAULT_PATH = '/Users/di3go/Library/Mobile Documents/iCloud~md~obsidian/Documents/vault/'
ASTRO_CONTENT_PATH = '/Users/di3go/Projects/multiterm-astro/src/content'
OBSIDIAN_PAGES_PATH = f"{OBSIDIAN_VAULT_PATH}/Pages"
OBSIDIAN_ASSETS_PATH = f"{OBSIDIAN_VAULT_PATH}/Assets"
FOLDERS_MAPPING = {
    f"{OBSIDIAN_PAGES_PATH}/Blog/Articles": f"{ASTRO_CONTENT_PATH}/articles/obsidian",
    f"{OBSIDIAN_PAGES_PATH}/Blog/Writeups": f"{ASTRO_CONTENT_PATH}/writeups/obsidian"
}

all_types = []

def list_documents(path):
    return [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]

if __name__ == "__main__":

    md = Markdown()

    for source_folder_path, target_folder_path in FOLDERS_MAPPING.items():

        # Remove the target path if it exists
        if os.path.exists(target_folder_path):
            shutil.rmtree(target_folder_path)

        # Re-create the target path
        os.makedirs(target_folder_path)

        for full_filename in list_documents(source_folder_path):
            filename, extension = os.path.splitext(full_filename)
            source_file_path = os.path.join(source_folder_path, full_filename)
            target_file_folder_path = os.path.join(target_folder_path, filename)
            target_file_path = os.path.join(target_file_folder_path, full_filename)

            # Create the target file path
            os.makedirs(target_file_folder_path)

            with open(source_file_path, 'r') as source_file:

                file_content = source_file.read()

                file_frontmatter_yaml_match = re.search(r'^---\n(.*?)\n---', file_content, re.DOTALL)
                if file_frontmatter_yaml_match:
                    file_frontmatter = yaml.safe_load(file_frontmatter_yaml_match.group(1))
                    new_file_frontmatter = {}
                    new_file_frontmatter['title'] = filename
                    new_file_frontmatter['published'] = file_frontmatter['Created']

                    new_file_frontmatter_yaml = f"---\n{yaml.dump(new_file_frontmatter)}\n---\n"
                    file_content = file_content.replace(file_frontmatter_yaml_match.group(0), new_file_frontmatter_yaml,1)

                else:
                    raise ValueError(f"Frontmatter not found in {source_file_path}")
                print(file_frontmatter)

                attachment_matches = re.finditer(r'[!]\[\[(.*?)([|](.*?))?\]\]', file_content)
                for attachment_match in attachment_matches:
                    attachment_name = attachment_match.group(1)
                    source_attachment_path = os.path.join(OBSIDIAN_ASSETS_PATH, attachment_name)
                    target_attachment_path = os.path.join(target_file_folder_path, attachment_name)
                    shutil.copyfile(source_attachment_path, target_attachment_path)
                    # file_content[attachment_match.start():attachment_match.end()] = f'![{attachment_name}](./{attachment_name})'
                    file_content = file_content.replace(attachment_match.group(0), f'![{attachment_name}](./{attachment_name})')

                with open(target_file_path, 'w') as target_file:
                    target_file.write(file_content)
