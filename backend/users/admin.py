from django.contrib import admin

# Register your models here.

from .models import Feedback
from .models import Blog

admin.site.register(Feedback)

admin.site.register(Blog)
