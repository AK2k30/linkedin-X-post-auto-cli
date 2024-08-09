#!/bin/bash

# Define paths
CLI_PATH="./main.js"
TEST_FILE_PATH="./testfile.txt"  # Make sure this file exists or create one for testing

# Create a test file if it doesn't exist
if [ ! -f "$TEST_FILE_PATH" ]; then
    echo "This is a test file for CLI" > "$TEST_FILE_PATH"
fi

# Run the CLI tool with simulated user input
echo "Running tests..."

# Simulate entering credentials and selecting file
echo "Simulating user input..."

# Test selecting file option
echo "LinkedIn Username: testuser" | \
echo "LinkedIn Password: testpass" | \
echo "Twitter (now X) Username: testuser" | \
echo "Twitter (now X) Password: testpass" | \
echo "Select from folder" | \
echo "$TEST_FILE_PATH" | \
echo "Enter manually" | \
echo "Test caption" | \
node $CLI_PATH

# Simulate the process of generating a caption
echo "Simulating automatic caption generation..."
echo "LinkedIn Username: testuser" | \
echo "LinkedIn Password: testpass" | \
echo "Twitter (now X) Username: testuser" | \
echo "Twitter (now X) Password: testpass" | \
echo "Enter manually" | \
echo "Generated caption" | \
echo "Generate automatically" | \
echo "This is a test description" | \
node $CLI_PATH

echo "Tests completed."
