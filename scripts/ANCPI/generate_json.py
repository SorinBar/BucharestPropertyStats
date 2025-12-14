import pandas as pd
import json
import os
import re

downloads_folder = "./downloads"

keys = ['Nr_crt', 'Judet', 'Extravilan agricol', 'Extravilan neagricol',
        'Intravilan cu constructii', 'Intravilan fara constructii', 
        'Nr unitati individuale', 'Total imobile']

results = []

for filename in os.listdir(downloads_folder):
    if filename.endswith(".xlsx"):
        filepath = os.path.join(downloads_folder, filename)
        print(f"Procesăm: {filename}")
        
        df = pd.read_excel(filepath, header=2)
        
        buc_row = df[
            (df['Județ'].str.upper() == 'BUCURESTI') |
            (df['Județ'].str.upper() == 'BUCUREȘTI')
        ].iloc[0]

        data_dict = {key: buc_row[i] for i, key in enumerate(keys)}
        
        match = re.search(r'statistica-(.*)\.xlsx', filename, re.IGNORECASE)
        if match:
            month_year = match.group(1).replace('-', ' ').title()
        else:
            month_year = "Unknown"
        
        data_dict["data"] = month_year
        
        results.append(data_dict)

with open('ANCPI.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Toate datele au fost salvate în bucuresti_all.json")
