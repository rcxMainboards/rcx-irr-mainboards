# Define la función GetSystemMetrics
function GetSystemMetrics {
    param (
        [int]$nIndex
    )
    $signature = @"
    [DllImport("user32.dll")]
    public static extern int GetSystemMetrics(int nIndex);
"@
    $type = Add-Type -MemberDefinition $signature -Name NativeMethods -Namespace Win32 -PassThru
    return $type::GetSystemMetrics($nIndex)
}

# Función para imprimir el mensaje cuando cambie el valor
function MonitorSystemMetricsChange {
        $currentValue = GetSystemMetrics 8195  # Obtener el valor actual
        Write-Host "$currentValue"
}

# Llamar a la función MonitorSystemMetricsChange
MonitorSystemMetricsChange
