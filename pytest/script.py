"""..."""

import requests


timeout = 120
base_url = "http://localhost:8000"
api_url = base_url + "/api/v1"


def get_headers(token: str) -> dict:
    """..."""
    return {"Authorization": f"Bearer {token}"}


def get_email(name: str) -> str:
    """..."""
    return f"{name}@mail.com"


def get_creds(name: str) -> dict:
    """..."""
    return {"email": get_email(name), "password": "password"}


def get_token(name: str) -> dict:
    """..."""
    return requests.post(
        f"{api_url}/auth/login",
        data=get_creds(name),
        timeout=timeout,
    ).json()


def get_access_token(name: str) -> str:
    """..."""
    return get_token(name)["access_token"]


def post(path: str, data: dict, headers: dict):
    """..."""
    return requests.post(
        api_url + path,
        data=data,
        headers=headers,
        timeout=timeout,
    ).json()


def get(path: str, params: dict, headers: dict):
    """..."""
    return requests.get(
        api_url + path,
        params=params,
        headers=headers,
        timeout=timeout,
    ).json()


def register(name: str):
    """..."""
    return post(
        "/auth/register",
        {"name": name, "email": get_email(name), "password": "password"},
        {},
    )


def main():
    """..."""
    su_headers = get_headers(get_access_token("su"))
    subject_names = [
        "Mathematical Analysis 1",
        "Mathematical Analysis 2",
        "Algorithms",
        "Algebra",
        "OOP",
        "Fundamental of Programming",
        "Python",
    ]
    klass_names = [
        "Mathematical Analysis 1 - 2024",
        "Mathematical Analysis 2 - 2024",
        "Mathematical Analysis 3 - 2025",
        "Modern Algebra - 2024",
        "Linear Algebra - 2024",
        "Geometry and Topology - 2024",
        "Introduction to Programming - 2024",
        "OOP - 2024",
        "Python - 2024",
    ]
    group_names = [
        "B01/24",
        "B02/24",
        "B03/24",
        "B05/24",
        "B06/24",
        "B09/24",
        "B10/24",
    ]
    teacher_names = [
        "oivanova",
        "atiskin",
        "ybelov",
        "ilukashova",
        "apetrov",
        "asemenov",
        "amiller",
    ]
    student_names = [
        "mzinyoni",
        "tngwenya",
        "jpele",
        "akmedova",
        "dribka",
        "mrudenko",
        "dguseva",
    ]

    for name in subject_names:
        post("/subjects", {"name": name}, su_headers)

    for name in teacher_names + student_names:
        register(name)

    oivanova_headers = get_headers(get_access_token("oivanova"))

    for name in group_names:
        post("/groups", {"name": name}, oivanova_headers)

    for name in klass_names:
        post("/klasses", {"name": name}, oivanova_headers)

    for klass_id in range(1, 10):
        for user_id in range(7, 14):
            post(
                f"/klasses/{klass_id}/members",
                {"userId": user_id, "isAdmin": False},
                oivanova_headers,
            )

    post(
        "/lists",
        {"name": "Mathematical Analysis 1 - 2024"},
        get_headers(get_access_token("ybelov")),
    )
    post(
        "/lists",
        {"name": "Mathematical Analysis 2 - 2024"},
        get_headers(get_access_token("ybelov")),
    )
    post(
        "/lists",
        {"name": "Mathematical Analysis 3 - 2024"},
        get_headers(get_access_token("ybelov")),
    )
    post(
        "/lists",
        {"name": "Modern Algebra - 2024"},
        get_headers(get_access_token("asemenov")),
    )
    post(
        "/lists",
        {"name": "Linear Algebra - 2024"},
        get_headers(get_access_token("asemenov")),
    )
    post(
        "/lists",
        {"name": "Geometry and Topology - 2024"},
        get_headers(get_access_token("amiller")),
    )
    post(
        "/lists",
        {"name": "Introduction to Programming - 2024"},
        get_headers(get_access_token("apetrov")),
    )
    post(
        "/lists",
        {"name": "OOP - 2024"},
        get_headers(get_access_token("apetrov")),
    )
    post(
        "/lists",
        {"name": "Python - 2024"},
        get_headers(get_access_token("apetrov")),
    )


if __name__ == "__main__":
    main()
