# SSL/HTTPS Test Script for umairali.me (PowerShell)

Write-Host "🔒 SSL/HTTPS Configuration Test" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

$domain = "umairali.me"
$httpUrl = "http://$domain"
$httpsUrl = "https://$domain"

Write-Host "Testing domain: $domain" -ForegroundColor Yellow
Write-Host ""

# Test 1: Check if site is accessible via HTTPS
Write-Host "1. Testing HTTPS accessibility..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri $httpsUrl -Method Head -TimeoutSec 10 -ErrorAction Stop
    Write-Host "✅ Site accessible via HTTPS" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode) $($response.StatusDescription)" -ForegroundColor Gray
} catch {
    Write-Host "❌ Site not accessible via HTTPS" -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "   Please check DNS configuration and SSL certificate" -ForegroundColor Yellow
}

Write-Host ""

# Test 2: Check HTTP to HTTPS redirect
Write-Host "2. Testing HTTP to HTTPS redirect..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri $httpUrl -Method Head -TimeoutSec 10 -MaximumRedirection 0 -ErrorAction Stop
    Write-Host "❌ No redirect detected" -ForegroundColor Red
} catch {
    if ($_.Exception.Response.StatusCode -eq 301 -or $_.Exception.Response.StatusCode -eq 302) {
        Write-Host "✅ HTTP to HTTPS redirect working" -ForegroundColor Green
        $location = $_.Exception.Response.Headers["Location"]
        Write-Host "   Redirect to: $location" -ForegroundColor Gray
    } else {
        Write-Host "❌ HTTP to HTTPS redirect not working properly" -ForegroundColor Red
        Write-Host "   Status: $($_.Exception.Response.StatusCode)" -ForegroundColor Red
    }
}

Write-Host ""

# Test 3: Check security headers
Write-Host "3. Testing security headers..." -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri $httpsUrl -Method Head -TimeoutSec 10 -ErrorAction Stop
    Write-Host "   Security headers present:" -ForegroundColor Gray
    
    $securityHeaders = @(
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "X-Frame-Options",
        "X-XSS-Protection",
        "Content-Security-Policy",
        "Referrer-Policy"
    )
    
    $foundHeaders = 0
    foreach ($header in $securityHeaders) {
        if ($response.Headers.ContainsKey($header)) {
            Write-Host "   ✅ $header" -ForegroundColor Green
            $foundHeaders++
        } else {
            Write-Host "   ❌ $header" -ForegroundColor Red
        }
    }
    
    if ($foundHeaders -eq $securityHeaders.Count) {
        Write-Host "   🎉 All security headers present!" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️ Some security headers missing ($foundHeaders/$($securityHeaders.Count))" -ForegroundColor Yellow
    }
    
} catch {
    Write-Host "❌ Cannot test security headers (site not accessible)" -ForegroundColor Red
}

Write-Host ""

# Test 4: SSL Certificate basic check
Write-Host "4. Testing SSL certificate..." -ForegroundColor Cyan
try {
    $uri = [System.Uri]::new($httpsUrl)
    $tcpClient = New-Object System.Net.Sockets.TcpClient
    $tcpClient.Connect($uri.Host, 443)
    $sslStream = New-Object System.Net.Security.SslStream($tcpClient.GetStream())
    $sslStream.AuthenticateAsClient($uri.Host)
    
    $cert = $sslStream.RemoteCertificate
    $cert2 = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($cert)
    
    Write-Host "✅ SSL certificate valid" -ForegroundColor Green
    Write-Host "   Subject: $($cert2.Subject)" -ForegroundColor Gray
    Write-Host "   Issuer: $($cert2.Issuer)" -ForegroundColor Gray
    Write-Host "   Valid from: $($cert2.NotBefore)" -ForegroundColor Gray
    Write-Host "   Valid to: $($cert2.NotAfter)" -ForegroundColor Gray
    
    if ($cert2.NotAfter -lt (Get-Date).AddDays(30)) {
        Write-Host "   ⚠️ Certificate expires within 30 days!" -ForegroundColor Yellow
    }
    
    $sslStream.Close()
    $tcpClient.Close()
} catch {
    Write-Host "❌ SSL certificate issue: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Summary and recommendations
Write-Host "🎯 Manual verification steps:" -ForegroundColor Yellow
Write-Host "1. Visit https://www.ssllabs.com/ssltest/analyze.html?d=$domain" -ForegroundColor White
Write-Host "2. Visit https://securityheaders.com/?q=$domain" -ForegroundColor White
Write-Host "3. Check GitHub Pages settings for 'Enforce HTTPS'" -ForegroundColor White
Write-Host "4. Verify custom domain DNS configuration" -ForegroundColor White

Write-Host ""
Write-Host "📋 Expected results:" -ForegroundColor Yellow
Write-Host "✅ SSL Labs Grade: A+" -ForegroundColor Green
Write-Host "✅ Security Headers Grade: A+" -ForegroundColor Green
Write-Host "✅ HTTPS enforcement active" -ForegroundColor Green
Write-Host "✅ All security headers present" -ForegroundColor Green

Write-Host ""
Write-Host "🔧 If issues found:" -ForegroundColor Yellow
Write-Host "1. Check .htaccess file for HTTPS redirect and security headers" -ForegroundColor White
Write-Host "2. Verify GitHub Pages 'Enforce HTTPS' setting is enabled" -ForegroundColor White
Write-Host "3. Wait 24-48 hours for SSL certificate propagation" -ForegroundColor White
Write-Host "4. Check DNS configuration for custom domain" -ForegroundColor White
