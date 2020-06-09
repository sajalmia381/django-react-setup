from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from .views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('list.urls')),
    re_path(r'^', FrontendAppView.as_view()),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)