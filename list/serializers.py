from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import BusinessList

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')


class BusinessListSerializer(serializers.ModelSerializer):
    create_by = UserSerializer()
    class Meta:
        model = BusinessList
        fields = [
            'create_by', 'name', 'image', 'description', 'create_at', 'update_at'
        ]