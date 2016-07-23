from __future__ import unicode_literals

from django.db import models


class Lead(models.Model):
    CITIES = (
        ('1', 'Mumbai'),
        ('2', 'Delhi'),
    )

    SERVICES = (
        ('1', 'Nursing'),
        ('2', 'Equipment'),
    )

    RENT_OR_PURCHASE = (
        ('1', 'Rent'),
        ('2', 'Purchase')
    )

    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.IntegerField()
    city = models.CharField(max_length=1, choices=CITIES)
    services = models.CharField(max_length=1, choices=SERVICES)
    no_of_hours = models.IntegerField(null=True)
    deposits = models.IntegerField(null=True)
    rent_or_purchase = models.CharField(max_length=1, choices=RENT_OR_PURCHASE, null=True)
