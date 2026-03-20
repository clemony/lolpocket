#!/usr/bin/env bash
set -euo pipefail

curl -X POST http://localhost:8080/_nitro/tasks/reddit-refresh

echo "Done"
