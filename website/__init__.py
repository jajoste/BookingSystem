from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config["SECRE_KEY"] = "nscnianscjdfjflaap"
    
    from .views import views
    from .testviews import testviews
    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(testviews, url_prefix="/")

    return app
    