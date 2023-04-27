
# My implementation of JWT 

It was developed with TDD in mind, so there are tests for everything

## some background

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

* Header:
  
```shell
{
"alg": "HS256",
"typ": "JWT"
}

```
* Payload
 
```shell
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
* Signature

```shell
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

Therefore, a JWT typically looks like the following.

    xxxxx.yyyyy.zzzzz


This output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact when compared to XML-based standards such as SAML.

## A working JWT Library needs to provide 3 functions:
*   sign()
*   verify()
*   decode()

