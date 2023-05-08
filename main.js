import json
import language-tree.json

def find_language(node, language):
    if node['name'].lower().startswith(language.lower()):
        return [node['name']]
    else:
        for child in node.get('children', []):
            path = find_language(child, language)
            if path:
                return [node['name']] + path
        return []

if __name__ == '__main__':
    with open('language-tree.json') as f:
        language_tree = json.load(f)
    language = input("Enter the name of the language to search for: ")
    path = find_language(language_tree, language)
    if path:
        print("Path to language:", " -> ".join(path))
    else:
        print("Language not found.")
