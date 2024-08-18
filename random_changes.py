import os
import random
import string
from datetime import datetime

# Function to make a random change to a JavaScript file
def make_random_js_change(repo_path):
    js_files = [f for f in os.listdir(repo_path) if f.endswith('.js')]
    if not js_files:
        return

    file_to_change = random.choice(js_files)
    with open(file_to_change, 'a') as file:
        code_snippets = [
            f"\n// Randomly added at {datetime.now()}",
            "\nfunction randomFunc() {",
            f"    console.log('{''.join(random.choices(string.ascii_letters + string.digits, k=10))}');",
            "}",
            "\nrandomFunc();"
        ]
        file.write("\n".join(code_snippets))

if __name__ == "__main__":
    repo_path = os.getcwd()  # Use the current working directory
    make_random_js_change(repo_path)
