from flask import Blueprint, redirect, render_template, request, flash, url_for

views = Blueprint('views', __name__,)

@views.route('/', methods=['GET', 'POST'])
def home():
    if request.method=='POST':
        return redirect(url_for("views.cal"))
        
    return render_template("home.html")

@views.route('/cal', methods=['GET'])
def cal():
    return render_template("cal.html")

