# Security Checklist for a Public Repo

This project is public. Use this checklist before pushing changes.

## 1) Keep secrets out of git

- Put runtime secrets in Vercel environment variables, not in code.
- Use `.env.local` for local development and keep real values only there.
- Commit `.env.example` with placeholders only.
- Never commit private keys, service account files, or credentials exports.

## 2) Understand `NEXT_PUBLIC_` variables

- Any variable starting with `NEXT_PUBLIC_` is exposed to users in browser bundles.
- Only use `NEXT_PUBLIC_` for values that are intentionally public.
- Keep API tokens and private credentials server-only (without `NEXT_PUBLIC_`).

## 3) Quick local secret scan before push

Run this command from the project root:

```bash
rg -n --hidden --glob '!.git' --glob '!node_modules' "(api[_-]?key|apikey|secret|token|password|private[_-]?key|client[_-]?secret|access[_-]?key|-----BEGIN (RSA|EC|OPENSSH|PGP) PRIVATE KEY-----|AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z\\-_]{35}|ghp_[A-Za-z0-9]{36})"
```

If the scan returns results, review them before pushing.

## 4) Vercel deployment hygiene

- Store secrets in Vercel Project Settings -> Environment Variables.
- Limit production secrets to Production environment only.
- Rotate secrets immediately if one is accidentally committed.

## 5) If a secret is leaked

1. Revoke/rotate the secret at the provider immediately.
2. Remove it from code and git history.
3. Redeploy with a fresh secret.
4. Audit logs for suspicious usage.
