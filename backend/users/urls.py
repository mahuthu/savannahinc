from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UserViewSet
from .views import feedback_view
from .views import BlogListCreateAPIView, BlogDetailAPIView



urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/users/', UserViewSet.as_view({'get': 'list'}), name='user-list'),
    path('api/users/<int:pk>/', UserViewSet.as_view({'get': 'retrieve'}), name='user-detail'),
    path('api/feedback/', feedback_view, name='feedback'),
    path('api/blogs/', BlogListCreateAPIView.as_view(), name='blog-list-create'),
    path('api/blogs/<int:pk>/', BlogDetailAPIView.as_view(), name='blog-detail'),



]