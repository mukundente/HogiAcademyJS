from fonction import *


db=[]
while True:
    choix = input ("""
                  vous voulez: \t
                  (1)ajouter\t
                  (2)modifier\t
                  (3)supprimer\t
                  (4)recherche\t
                  (5)lister\t
                  (0)pour terminer:  """
                  )
    
    
    if (choix == "1"):
      ajouter(db)
    elif (choix == "2"):
      modifier(db)
    elif (choix == "3"):
      supprimer(db)
    elif (choix == "4"):
      rechercher(db)
    elif (choix == "5"):  
      lister(db)
    else:
      break  
    
