import datetime

# Yeh script automatic naya article banayegi
def create_article():
    today = datetime.date.today()
    filename = f"review-{today}.txt"
    
    content = f"""
    AI Tool Review - {today}
    ========================
    
    Aaj ka feature tool: [Tool Name]
    
    Is tool ki khasiyat:
    - Fast speed
    - Easy to use
    - Free trial available
    
    (Affiliate Link yahan add hoga jab approval mil jayega)
    """
    
    print(f"✅ Article '{filename}' ready hai!")

create_article()
