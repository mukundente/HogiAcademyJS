
from ast import Num
import math
from sqlite3 import PARSE_COLNAMES
from xml.dom import NoModificationAllowedErr


def lister(db):
  for li in db:
    print(
      li['num'], "\n",
      li['nom'],"\n",
      li['prenom'],"n",
      li['sexe'],"\n",
      li['ang'],"\n",
      li['math'],"\n",
      li['physique'],"\n",
      li['chimie'],"\n",
      li['kirundi'],"\n"
    )
def rechercher(db):
    
  print("vous avez choisi de rechercher")

def ajouter(db):
    
 num=input("Veuillez entrer votre matricule: ")
 nom =input("Veuillez  entrer votre nom :")
 prenom =input( "Veuillez  entrer votre prenom : ")
 sexe =input( "Veuillez  entrer votre sexe : ")
 ang =float(input( "Veuillez  entrer votre  note ang: "))
 math=float(input( "Veuillez  entrer votre note math: "))
 physique =float(input( "Veuillez  entrer votre note pyhsique : "))
 chimie =float(input( "Veuillez  entrer votre note chimie : "))
 kirundi=float(input( "Veuillez  entrer votre note kirundi: "))
 
 eleves={
   "num":num,
   "nom":nom,
   "prenom":prenom,
   "sexe":sexe,
   "ang":ang,
   "math":math,
   "physique":physique,
   "chimie":chimie,
   "kirundi":kirundi
 }
 db.append(eleves)
 
 
def modifier(db):
  print("vous avez choisi modifier")
def supprimer (db):
  print("vous avez choisi de supprimer")