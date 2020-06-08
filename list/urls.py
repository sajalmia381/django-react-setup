from django.urls import path
from .views import BusinessListApiView

urlpatterns = [
    path('api/business-list', BusinessListApiView.as_view(), name='api_business_list')
]