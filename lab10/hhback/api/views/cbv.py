from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.pagination import LimitOffsetPagination

class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 10

class CompanyListView(generics.ListCreateAPIView):
    serializer_class = CompanySerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return Company.objects.all()

class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CompanySerializer
    permission_classes = (AllowAny, )
    lookup_url_kwarg = 'id'

    def get_queryset(self):
        id = self.kwargs['id']
        return Company.objects.filter(id=id)


class CompanyVacancyList(generics.ListAPIView):
    serializer_class = VacancySerializer
    permission_classes = (AllowAny, )

    def get_queryset(self):
        company_id = self.kwargs['id']
        company = get_object_or_404(Company, id=company_id)
        return company.vacancies.all()


class VacancyListView(generics.ListCreateAPIView):
    serializer_class = VacancySerializer
    permission_classes = (AllowAny, )
    queryset = Vacancy.objects.all()


class VacancyDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = VacancySerializer
    permission_classes = (AllowAny, )
    lookup_url_kwarg = 'id'

    def get_queryset(self):
        id = self.kwargs['id']
        return Vacancy.objects.filter(id=id)


class VacancyTop(generics.ListAPIView):
    serializer_class = VacancySerializer
    permission_classes = (AllowAny, )
    pagination_class = CustomLimitOffsetPagination

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')
