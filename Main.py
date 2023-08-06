from summariser import summarise
from text_file_clean_up import clean_text_file

path = r"txt_file_upload\test_case_1.txt"

clean_text_file(path)
ret = summarise()
print(ret)