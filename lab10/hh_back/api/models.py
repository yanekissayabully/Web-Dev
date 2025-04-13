from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    class Meta:
        verbose_name_plural = "Companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='vacancies')
    class Meta:
        verbose_name_plural = "Vacancies"

# Create your models here.
