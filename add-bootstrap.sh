#!/bin/bash

# List of HTML files to update (excluding nuts-and-bolts.html and index.html which are already done)
HTML_FILES=(
    "contact.html"
    "work-categories.html"
    "Puppy_Love.html"
    "bookcover.html"
    "rip.html"
    "Coping.html"
    "Hanratty.html"
    "AOMTrading.html"
    "Spell_It.html"
    "AlbumDesign.html"
    "aqualady.html"
)

BOOTSTRAP_LINE='	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">'

for file in "${HTML_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "Adding Bootstrap to $file..."
        
        # Check if Bootstrap is already added
        if grep -q "bootstrap@5.3.0" "$file"; then
            echo "$file already has Bootstrap, skipping..."
            continue
        fi
        
        # Add Bootstrap CSS after the favicon line
        sed -i '' "/rel=\"shortcut icon\"/a\\
$BOOTSTRAP_LINE
" "$file"
        
        echo "$file updated with Bootstrap CSS."
    else
        echo "$file not found, skipping..."
    fi
done

echo "Bootstrap CSS addition complete!"
