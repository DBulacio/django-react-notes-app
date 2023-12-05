from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer

# INDIVIDUAL NOTES
def getNote(request, pk):
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)

def updateNote(request, pk):
  data = request.data # new data
  note = Note.objects.get(id=pk)
  serializer = NoteSerializer(instance=note, data=data)

  if(serializer.is_valid()):
    serializer.save()

  return Response(serializer.data)

def deleteNote(request, pk):
  note = Note.objects.get(id=pk)
  note.delete()

  return Response('Note was deleted!')

# ALL NOTES
def getNotes(request):
  notes = Note.objects.all().order_by('-updated')
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)

def createNote(request):
  data = request.data # new data
  note = Note.objects.create(
    body = data['body']
    # updated and created are generated automatically
  )
  serializer = NoteSerializer(note, many=False)

  return Response(serializer.data)