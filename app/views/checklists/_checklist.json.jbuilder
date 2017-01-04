json.extract! checklist, :id, :date, :location, :coord, :note, :created_at, :updated_at
json.url checklist_url(checklist, format: :json)