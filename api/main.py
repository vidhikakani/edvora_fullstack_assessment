import fastapi

import routers

app = fastapi.FastAPI()

app.include_router(routers.router, prefix="/api", tags=['users'])