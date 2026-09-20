from backend.database.connection import get_db_connection


class DatabaseService:

    def get_user(self, user_id):
        connection = get_db_connection()

        try:
            cursor = connection.cursor()

            cursor.execute(
                """
                SELECT user_id, name, email
                FROM users
                WHERE user_id = %s
                """,
                (user_id,)
            )

            user = cursor.fetchone()

            return user

        finally:
            cursor.close()
            connection.close()

    def save_career_recommendation(
        self,
        user_id,
        career_name,
        match_reason
    ):
        connection = get_db_connection()

        try:
            cursor = connection.cursor()

            cursor.execute(
                """
                INSERT INTO career_recommendations
                (
                    user_id,
                    career_name,
                    match_reason
                )
                VALUES (%s, %s, %s)
                RETURNING recommendation_id
                """,
                (
                    user_id,
                    career_name,
                    match_reason
                )
            )

            recommendation_id = cursor.fetchone()[0]

            connection.commit()

            return recommendation_id

        finally:
            cursor.close()
            connection.close()