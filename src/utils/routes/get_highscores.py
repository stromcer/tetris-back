from src.database import Score, db, User

def get_top_scores(limit=10):
    subquery = db.session.query(
        Score.user_id, 
        db.func.max(Score.total_score).label('max_score')
    ).group_by(Score.user_id).subquery('t')

    top_scores = db.session.query(Score).join(
        subquery, 
        db.and_(
            Score.user_id == subquery.c.user_id,
            Score.total_score == subquery.c.max_score
        )
    ).order_by(db.desc(subquery.c.max_score)).limit(limit).all()

    return [score.serialize() for score in top_scores]
