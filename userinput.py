# userinput.py
"""Interactive loop for Cascade tasks per project rule."""

while True:
    user_input = input("prompt: ")
    if user_input.strip().lower() == "stop":
        break
