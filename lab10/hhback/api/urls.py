from django.urls import path, include
from .views import cbv as views

# FBV 
''' 
urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.vacancies_top),
] 
'''

# CBV
urlpatterns = [
    path('companies/', views.CompanyListView.as_view()),
    path('companies/<int:id>/', views.CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacancyList.as_view()),
    path('vacancies/', views.VacancyListView.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetailView.as_view()),
    path('vacancies/top_ten/', views.VacancyTop.as_view()),
]

