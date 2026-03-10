locals {
  env_prod_path = "${path.module}/../.env.prod"
  env_prod_raw  = fileexists(local.env_prod_path) ? file(local.env_prod_path) : ""
  env_lines     = split("\n", local.env_prod_raw)

  env_map = {
    for line in local.env_lines :
    trimspace(split("=", line)[0]) => trimspace(join("=", slice(split("=", line), 1, length(split("=", line)))))
    if length(trimspace(line)) > 0 && !startswith(trimspace(line), "#") && length(split("=", line)) >= 2
  }

  aws_region_from_env = lookup(local.env_map, "AWS_DEFAULT_REGION", "")
  bucket_name_from_env = lookup(local.env_map, "S3_BUCKET", "")

  aws_region_effective = coalesce(var.aws_region, local.aws_region_from_env, "us-east-1")
  bucket_name_effective = coalesce(var.bucket_name, local.bucket_name_from_env)
}
