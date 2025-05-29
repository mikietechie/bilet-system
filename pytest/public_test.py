"""...."""

import requests

ROOT_URL = "http://localhost:8000"


def test_api():
    """..."""
    # login
    res = requests.post(
        f"{ROOT_URL}/api/v1/auth/login",
        {
            "email": "su@mail.com",
            "password": "password",
        },
        timeout=60,
    )
    assert res.ok
    access_token = res.json()["access_token"]
    headers = {"Authorization": f"Bearer {access_token}"}

    # list users
    res = requests.get(
        f"{ROOT_URL}/api/v1/users",
        headers=headers,
        timeout=60,
    )
    assert res.ok
    assert len(res.json()) >= 1
