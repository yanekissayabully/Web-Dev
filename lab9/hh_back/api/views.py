from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def company_detail(request, id):
    companies = get_object_or_404(Company, id=id)
    serializer = CompanySerializer()
    return Response(serializer.data)
@api_view(['GET'])
def company_vacancies(request,id):
    company = get_object_or_404(Company, id=id)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many = True)
    return Response(serializer.data)
@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)
@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

# Create your views here.
