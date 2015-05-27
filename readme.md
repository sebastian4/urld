urld
====

encodes and decodes any url

## installation

npm install -g urld

## instructions

```
urld --encode "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=<html>"
urld -e "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=<html>"

https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=%3Chtml%3E
```

```
urld --decode "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=%3Chtml%3E"
urld -d "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=%3Chtml%3E"

https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=<html>
```

```
urld --decodeJson "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&sort=[{%22property%22:%22severity%22,%22direction%22:%22ASC%22}]"
urld -j "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&sort=[{%22property%22:%22severity%22,%22direction%22:%22ASC%22}]"

https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&sort=[{"property":"severity","direction":"ASC"}]
{
    "sourceid": "chrome-instant",
    "ion": "1",
    "espv": "2",
    "ie": "UTF-8",
    "sort": [
        {
            "property": "severity",
            "direction": "ASC"
        }
    ]
}
```
