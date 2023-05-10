import os
import shutil

try:
    if os.path.isdir('instance'):
        shutil.rmtree('instance')
        print("Folder instance deleted")
    else:
        print("Folder instance not found")
        
        

    if os.path.isdir('migrations'):
        shutil.rmtree('migrations')
        print("Folder migrations deleted")
    else:
        print("Folder migrations not found")
        
except:
    print("Something went wrong")

finally:
    print('''
          
          Database successfully deleted. 
          
        
          For start the database again please run:
            pipenv run db_init
            pipenv run migrate
            pipenv run upgrade
            
          ''')