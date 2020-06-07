from django.urls import path
from .views import BusinessListApiView

urlpatterns = [
    path('business-list', BusinessListApiView.as_view(), name='api_business_list')
]