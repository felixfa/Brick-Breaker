
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
doc_ref = db.collection(u'flappybird').document(u'highscore')
doc = doc_ref.get()

score = doc.to_dict()['Score']

print(score)

doc_ref = db.collection(u'users').document(u'alovelddddace')
doc_ref.set({
    u'first': u'Ada3',
    u'last': u'Lovelace',
    u'born': 1815
})

