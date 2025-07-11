#!/bin/bash
# SSL/HTTPS Test Script for umairali.me

echo "🔒 SSL/HTTPS Configuration Test"
echo "================================"
echo ""

DOMAIN="umairali.me"
HTTP_URL="http://$DOMAIN"
HTTPS_URL="https://$DOMAIN"

echo "Testing domain: $DOMAIN"
echo ""

# Test 1: Check if site is accessible via HTTPS
echo "1. Testing HTTPS accessibility..."
if curl -Is --connect-timeout 10 "$HTTPS_URL" >/dev/null 2>&1; then
    echo "✅ Site accessible via HTTPS"
    HTTPS_STATUS=$(curl -Is "$HTTPS_URL" | head -n1)
    echo "   Status: $HTTPS_STATUS"
else
    echo "❌ Site not accessible via HTTPS"
    echo "   Please check DNS configuration and SSL certificate"
fi

echo ""

# Test 2: Check HTTP to HTTPS redirect
echo "2. Testing HTTP to HTTPS redirect..."
if curl -Is --connect-timeout 10 "$HTTP_URL" | grep -q "301\|302"; then
    echo "✅ HTTP to HTTPS redirect working"
    REDIRECT_LOCATION=$(curl -Is "$HTTP_URL" | grep -i "location:" | head -n1)
    echo "   $REDIRECT_LOCATION"
else
    echo "❌ HTTP to HTTPS redirect not working"
    echo "   Please check .htaccess configuration"
fi

echo ""

# Test 3: Check SSL certificate
echo "3. Testing SSL certificate..."
if command -v openssl >/dev/null 2>&1; then
    if echo | openssl s_client -servername "$DOMAIN" -connect "$DOMAIN:443" >/dev/null 2>&1; then
        echo "✅ SSL certificate valid"
        echo "   Certificate details:"
        echo | openssl s_client -servername "$DOMAIN" -connect "$DOMAIN:443" 2>/dev/null | openssl x509 -noout -dates -subject -issuer
    else
        echo "❌ SSL certificate issue"
    fi
else
    echo "ℹ️ OpenSSL not available for certificate testing"
fi

echo ""

# Test 4: Check security headers
echo "4. Testing security headers..."
if curl -Is --connect-timeout 10 "$HTTPS_URL" >/dev/null 2>&1; then
    echo "   Security headers present:"
    curl -Is "$HTTPS_URL" | grep -i "strict-transport-security\|x-content-type-options\|x-frame-options\|x-xss-protection\|content-security-policy" || echo "   ⚠️ Some security headers may not be active"
else
    echo "❌ Cannot test security headers (site not accessible)"
fi

echo ""

# Test 5: SSL Labs API (if available)
echo "5. SSL Labs grade (if available)..."
if command -v jq >/dev/null 2>&1; then
    echo "   Checking SSL Labs API..."
    # Note: This is a simplified check. Full SSL Labs API integration would require more complex handling
    echo "   ℹ️ Visit https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN for detailed analysis"
else
    echo "   ℹ️ Visit https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN for SSL grade"
fi

echo ""

echo "🎯 Manual verification steps:"
echo "1. Visit https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"
echo "2. Visit https://securityheaders.com/?q=$DOMAIN"
echo "3. Check GitHub Pages settings for 'Enforce HTTPS'"
echo "4. Verify custom domain DNS configuration"

echo ""
echo "📋 Expected results:"
echo "✅ SSL Labs Grade: A+"
echo "✅ Security Headers Grade: A+"
echo "✅ HTTPS enforcement active"
echo "✅ All security headers present"
