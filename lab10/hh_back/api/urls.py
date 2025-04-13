from django.urls import path
from .views import (
    CompanyListCreateAPIView, company_list_create,
    VacancyListCreateAPIView, vacancy_list_create,
    CompanyDetail, CompanyVacanciesList,
    VacancyList, VacancyDetail, TopTenVacanciesList
)

urlpatterns = [
    path('companies/', CompanyListCreateAPIView.as_view(), name='company-list-create-class'),
    path('function/companies/', company_list_create, name='company-list-create-function'),
    path('companies/<int:id>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacanciesList.as_view(), name='company-vacancies-list'),
    path('vacancies/', VacancyListCreateAPIView.as_view(), name='vacancy-list-create-class'),
    path('function/vacancies/', vacancy_list_create, name='vacancy-list-create-function'),
    path('vacancies/<int:id>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesList.as_view(), name='top-ten-vacancies'),
]