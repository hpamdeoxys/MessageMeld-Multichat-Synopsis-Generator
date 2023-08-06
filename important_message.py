import re
from text_file_clean_up import *

def important_message_recon(path):
    with open("dataset_important_keywords.txt",'r', encoding="utf8") as f:
        lines = f.readlines()

    #loading the dataset of important keywords
    for i in range(len(lines)):
        temp_str = lines[i]
        temp_str = temp_str.strip()
        lines[i] = temp_str
    
    clean_text_file(path)

    with open("cleaned_text_file.txt",'r', encoding="utf8") as f:
        messages = f.readlines()

    list_imp_messages = []
    for message in messages:
        message = message.strip()
        list_split = message.split(":")
        try:
            if len(list_split)>2:
                for a in range(1,len(list_split)):
                    message_match += list_split[a]
            else:
                message_match = list_split[1]
        except:
            pass

        match = 0
        for keyword in lines:
            if re.search(keyword,message_match,re.I):
                match += 1
        if match>0:
            tup = (message,match)
            list_imp_messages.append(tup)
        else:
            continue
    
    list_imp_messages.sort(key=lambda i:i[1],reverse=True)
    final_return_list = []
    for message,match in list_imp_messages:
        final_return_list.append(message)
    #print(final_return_list)
    return final_return_list

# path = r"txt_file_upload\test_case_1.txt"
# important_message_recon(path)