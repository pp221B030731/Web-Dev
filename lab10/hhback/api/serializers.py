from rest_framework import serializers
from .models import Vacancy, Company



class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField(required=False)
    description = serializers.CharField(required=False)
    city = serializers.CharField(required=False)
    adress = serializers.CharField(required=False)

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.adress = validated_data.get('adress', instance.adress)
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']
        read_only_fields = ['id']

'''
class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = '__all__'

'''
