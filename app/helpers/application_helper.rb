module ApplicationHelper

  def full_title(slug)
    base_title = "DUCSS - Dublin University Computer Science Society"
    if slug.empty?
      base_title
    else
      "#{base_title}" | "#{slug} - #{base_title}"
    end
  end
end
