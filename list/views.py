from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import BusinessList
from .serializers import BusinessListSerializer


class BusinessListApiView(ListAPIView):
    serializer_class = BusinessListSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        qs = BusinessList.objects.select_related('create_by').all()
        return qs

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serialize = BusinessListSerializer(queryset, many=True)
        return Response(serialize.data, status=200)