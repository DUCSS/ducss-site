module ApplicationHelper

  def full_title(title)
    base_title = "DUCSS - Dublin University Computer Science Society"
    if title.empty?
      base_title
    else
      "#{title} - #{base_title}"
    end
  end
end
