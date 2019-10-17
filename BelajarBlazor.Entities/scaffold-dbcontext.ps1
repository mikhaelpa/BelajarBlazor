$connectionString = "Host=localhost;Database=belajarblazor;Username=postgres;Password=HelloWorld!;Persist Security Info=True";
$provider = "Npgsql.EntityFrameworkCore.PostgreSQL";
$dbContextName = "BelajarDbContext";

Remove-Item *.cs 
dotnet ef dbcontext scaffold $ConnectionString $provider -c $dbContextName -d -v
# -c: set DB Context name to...
# -d: use Data Annotation / attributes where possible.
# --use-database-names: do not PascalCase-ify table and column names.
# -v: show verbose output.
