#!/usr/bin/env python3
"""
Annotating variables and function with complex types
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Function sum of list
    """
    def idontknow(num: float):
        """
        helper func
        """
        return num * multiplier
    return idontknow
