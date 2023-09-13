# FullStory Dataform

## Overview
Dataform setup for FullStory data. This is a work in progress, and information contained here may be incomplete.

## Structure
### Environments
This project is structured to support multiple environments, typically "dev", "stage" and "prod".

### Datasets
Every domain consists of two or more BigQuery datasets. 

"Base" dataset contains views into the source data that are used to process the source data and tables to store the processed data. 
These datasets are named as "fullstory_base_<env>", e.g., fullstory_base_dev.

"Product" dataset(s) contain only views into the base datasets. These datasets are named as "fullstory_v<version_number>_<env>", 
e.g., fullstory_v1_dev.

Consumers of the domain data should only access data through the product views. This will help with maintaining stable "data interfaces"
across releases of the data store.

## Configuration
Source datasets and destination datasets are controlled by the values in [dataform.json](/dataform.json) file.

### Source datasets
Variables:
* `env` - Environment to use (e.g. "dev", "stage", "prod)
* `fullstory_export_project` - FullStory project
* `fullstory_export_dataset` - FullStory dataset
* `fullstory_export_org_id` - FullStory org ID

### Destination datasets
Destination datasets are created in the project specified by `defaultDatabase`.
Environment in the dataset name is defined by `env` variable.
