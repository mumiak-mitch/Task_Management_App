from django.contrib import admin
from django.urls import path, include
from task_manager import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
