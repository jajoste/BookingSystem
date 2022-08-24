from flask import Blueprint, redirect, render_template, request, flash, url_for

testviews = Blueprint('testviews', __name__,)

@testviews.route('/test1', methods=['GET'])
def test1():
    day = "monday"

    return render_template("test1.html", day=day)